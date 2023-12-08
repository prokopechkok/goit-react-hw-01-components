import React from 'react';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats?.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
