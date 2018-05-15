import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RollsInput from './components/rolls_input';
import AttackList from './components/attack_list';
import './style/style.scss';

interface AppState { attackDamages?: number[] };

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { attackDamages : [] };
  }

  generateAttacks(rolls: string) {
    this.setState({ attackDamages : [] });
    const attacks = _.uniq([...Array(+rolls)].fill(0).map(() => Math.ceil(Math.random() * 1000)));
    const hitsAndMisses = attacks.reduce((didYouGetHit: any, attack: number) => {
      didYouGetHit[attack] = attack > 10;
      return didYouGetHit;
    }, {})
    const allDamages: number[] = [];
    for (let attackRoll in hitsAndMisses) {
      if (hitsAndMisses[attackRoll]) {
        allDamages.push(Math.ceil(+attackRoll / 2));
      } else {
        allDamages.push(+attackRoll + 100);
      }
    }
    const attackDamages: number[] = allDamages.filter(damage => damage > 100);

    console.log('attacks: ', attacks);
    console.log('hitsAndMisses: ', hitsAndMisses);
    console.log('allDamages: ', allDamages);
    console.log('final damages: ', attackDamages);

    this.setState({ attackDamages });
  }

  render() {
    const generateAttacks = _.debounce((rolls: string) => {this.generateAttacks(rolls)}, 300);

    return (
      <div>
        <RollsInput onRollsNumberChange={rolls => generateAttacks(rolls)} />
        <div className="col-md-4 attack-rolls">
          <AttackList attacks={this.state.attackDamages} />
        </div>
        <div className="col-md-8 title-section">
          <h1>The Fight Against Erix...</h1>
          <h3>...Dragon</h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
