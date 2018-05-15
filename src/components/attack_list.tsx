import React from 'react';
import AttackListItem from './attack_list_item';

interface AttackListProps {
  attacks?: number[];
};

const AttackList = ({ attacks }: AttackListProps) => {
  const damages = attacks ?
    attacks.map((attackDamage, i) => {
      return (
        <AttackListItem key={i} attackDamage={attackDamage} />
      );
    }) :
    null;
  return (
    <ul className="list-group">
      { damages }
    </ul>
  )
}

export default AttackList;
