import React from 'react';

interface AttackDamage {
  attackDamage: number;
};

const mockeries: string[] = [
  'Yeah, you\'re long gone',
  'What should we tell your loved ones?',
  'Ohh... I don\'t even want to look...',
  'Your grandkids will feel that one'
]

const AttackListItem = ({ attackDamage }: AttackDamage) => {
  const multipleOfFive: boolean = attackDamage % 5 === 0;
  const mockery: string = multipleOfFive ?
    mockeries[Math.floor(mockeries.length * Math.random())] : '';
  return (
    <li className={"list-group-item" + (multipleOfFive ? ' red' : '')}>
      {attackDamage} {mockery}
    </li>
  )
}

export default AttackListItem;
