import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </>
  );
};
