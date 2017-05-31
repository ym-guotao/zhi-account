export const required = value => (value == null ? 'Required' : undefined);

export const password = value => (value && value.length > 5 ? undefined : '6 characters or more!');

export const email = value => (
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  undefined : 'Invalid email address'
);
