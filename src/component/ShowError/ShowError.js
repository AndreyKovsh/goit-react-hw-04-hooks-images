import PropTypes from 'prop-types';

function ErrorView({ error }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {error}</p>
    </div>
  );
}

ErrorView.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorView;
