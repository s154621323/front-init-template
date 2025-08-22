import { useState, useCallback } from 'react';
import { Draft, freeze, produce } from 'immer';

export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;

export function useImmer<T>(initialValue: T) {
  const [data, setData] = useState(
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true)
  );

  const updateData = useCallback((updater: T | DraftFunction<T>) => {
    if (typeof updater === 'function') {
      setData(produce(updater as DraftFunction<T>));
    } else {
      setData(freeze(updater, true));
    }
  }, []);

  return [data, updateData];
}