import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

type Props = {
  person: Person;
};

const FEMALE = 'f';

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, sex, slug } = person;

  return (
    <Link
      to={`/people/${slug}`}
      className={cn('has-text-link', {
        'has-text-danger': sex === FEMALE,
      })}
    >
      {name}
    </Link>
  );
};
