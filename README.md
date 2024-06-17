# 🎯querySelector

쿼리셀렉터 구현해보기 (Tree 탐색을 위한 학습)

### 목표

- 돔에 저장된 정보를 이용해서 원하는 돔을 가지고 오게 한다.
  -> Node API이용
- DFS / BFS 성능 비교

### 측정 결과

- 측정 방법
  편차가 좀 심해서 몇번 실행 후 평균으로 보이는 걸 취득

```
console.time("result");
측정을 원하는 함수 선언
console.timeEnd("result");
```

- findTargetByBFS

```
const $btn = Selector.querySelector("button");
const $secondDiv = Selector.querySelector("#second-div");
const $li = Selector.querySelector(".li");

위에서부터 각각
result: 0.18994140625 ms
result: 0.01708984375 ms
result: 0.012939453125 ms
```

- findTargetByDFS

```
const $btn = Selector.querySelector("button");
const $secondDiv = Selector.querySelector("#second-div");
const $li = Selector.querySelector(".li");

위에서부터 각각
result: 0.23193359375 ms
result: 0.02001953125 ms
result: 0.010986328125 ms
```

### 분석

트리가 깊지 않아서 크게 차이는 없으나 이 트리에서는 일단 DFS가 평균적으로 BFS보다 성능이 좋음<br/>
`$btn`같은 경우 트리의 가장 아래에 존재해서 BFS보단 DFS가 시간이 더 많이 걸리는 경향이 있음

---

### 공부한 것 정리

[위키](https://github.com/mi-hye/query-selector/wiki/%EC%BF%BC%EB%A6%AC%EC%85%80%EB%A0%89%ED%84%B0)
