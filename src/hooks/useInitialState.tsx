import type React from 'react';
import { useEffect, useState } from 'react';

import type { AppState } from '../store/reducer';

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export const withInitialState = <TProps,>(
  WrappedComponent: React.ComponentType<
    PropsWithoutInjected<TProps> & InjectedProps
  >,
) => {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load(initialState);
          setInitialState(data);
        } catch (e) {
          if (e instanceof Error) {
            setError(e);
          }
        }
        setIsLoading(false);
      };

      fetchInitialState();
    }, [initialState]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return <WrappedComponent {...props} initialState={initialState} />;
  };
};
