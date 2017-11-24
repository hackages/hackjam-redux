import PropTypes from 'prop-types';

export const TodoType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
