---
title: 파이썬 Map 함수는 중첩해서 쓸 수 있을까? (Python Map)
categories: []
toc: true
toc_sticky: true
toc_label: 목차
---

&nbsp;   
   
# Python Map함수는 중첩이 가능할까?

python 내장함수인 map함수는 iterable한 객체를 받아서 각 요소에 함수를 적용하고 map객체(iterable)로 그 결과를 반환한다.

보통 사용자에게서 입력받은 데이터를 특정 형태로 변환하고자 할 때 많이 쓰이며 **리스트**의 데이터에 적용하는 경우가 대부분이다.
어떤 데이터에 적용을 하든간에 결과 값은 map 객체로 나오며, 이 map객체를 직접 print해서 들여다 볼 수는 없다.  
(next()로 하나씩 접근해서 볼 수는 있지만 일반적으로는 list같은 데이터 타입으로 변환하여 보는 경우가 대부분)

내가 궁금했던 것은 이것이다. 
**"map함수를 통해 반환된 map객체에 바로 또 map함수를 적용할 수 있을까?"**

실험한 코드는 아래와 같다.
```python
user_input = map(str, map(int, input("숫자 여러개 입력: ").split()))

print(list(user_input))
```
사용자에게서 숫자 값을 여러개 입력받고 이를 연속 두번 map함수로 타입변환을 해준다.
map객체인 상태로는 출력이 불가능하니 print()에서 list로 변환하여 출력해주었다.

결과는 아래와 같다.
```python
숫자 여러개 입력: 1 56 253

['1', '56', '253']
```
마지막 map에 의해 str로 변환된 것을 볼 수 있다.

&nbsp;   
# 변환 중간 결과를 볼 수 있도록 테스트 해보았다.
```python
origin_input = input("숫자 여러개 입력: ").split()

int_input = map(int, origin_input)
str_input = map(str, int_input)

print(origin_input)
print(list(int_input))
print(list(str_input))
```

결과는 아래와 같다.
```python
숫자 여러개 입력: 1 56 253

['1', '56', '253'] #original_input
[1, 56, 253]       #int_input
[]                 #str_input
```
_**마지막 결과가 왜 안나오는지 모르겠다. map자체는 한번 iterate하면 더 이상 쓰지 못한다.(그 이상 iterate 하려는 경우 StopIteration 오류가 발생하며 list로 형변환 해도 빈 리스트만 나온다.)    
하지만 위에서는 int_input을 iterate하기 전에 str_input을 초기화하는데..**_

**위의 구문 중 print(list(int_input))부분을 지우고 실행해보니 print(list(str_input))이 제대로 나왔다.     
int_input과 str_input의 iterate가 공유되는 것인건가..?     
더 자세한 확인이 필요할 듯 하다..** 


&nbsp;

# map함수를 input().split()이 아닌 input()에다 쓰면 어떻게 될까?
input()으로 사용자 입력을 받은 경우  int()같은 함수로 감싸서 형변환 하는 것이 일반적인데 여기에 map()을 써보면 어떨까?
```python
user_input = map(int, input("숫자 하나 입력: ")) 

print(list(user_input))
#print(int(user_input)) error
```

1을 입력한 경우와 123을 입력한 경우를 동시에 살펴보자.
```python
숫자 하나 입력: 1
[1]

숫자 하나 입력: 123
[1, 2, 3]

# 만약 사용자 입력을 user_input = map(int, input("숫자 하나 입력: ").split())으로 받고 동일하게 list 형변환 후 출력한다면? 
숫자 하나 입력: 123
[123]


# 출력할 때 list로 변환해서 출력하는 대신 print(next(user_input))을 이용한다면?
 숫자 하나 입력: 1
1

숫자 하나 입력: 123
1

```
사용자 입력은 기본적으로 str로 받아들여지는데 이 str도 요소 하나하나에 접근이 가능한 iterable 타입이다. 따라서 위와같은 결과가 나온다.
실행 코드 중 밑에 있는 int()형변환 출력 구문은 에러가 발생한다. 에러 내용은 아래와 같다.
<pre>
<span style="color:red">
TypeError: int() argument must be a string, a bytes-like object or a number, not 'map'
</span>
</pre>
타입에러: int()에 들어갈 인자는 map객체가 아닌 string, [byte 데이터](https://www.educative.io/edpresso/what-is-a-bytes-like-object), 숫자 이어야 합니다.   

&nbsp;
# 결론
1. map은 중첩이 가능하다. (단, 여러줄에 걸쳐 여러번 map을 쓰는 경우 원치 않는 결과가 나올 수 있다.)     
2. map을 한번 iterate하는 경우 더 이상 쓸 수 없다. (list등 다른 타입으로 변환 하는 것도 한번 iterate 하는 것이다.)   
3. map(int, input())과 map(int, input().split())은 다르다.   
123을 입력한 경우 '123'으로 인식하느냐 \['123']으로 인식하느냐의 차이라고 보면 될 것 같다.

&nbsp;

> 참고: [제대로 파이썬 WikiDocs - map, filter](https://wikidocs.net/22803)
