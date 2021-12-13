## Is React
- useCallback
> 렌더링 최적화 = 불필요한 렌더링이 발생하지 않도록 제어
> 어떤 값이 바뀌었을때 함수를 새로 생성해야 하도록 하는 것.
> useCallBack(func, [value]);

- useMemo
> const avg = useMemo(() => averageValue(list), [list]);

- useRef
> 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 주는 hook