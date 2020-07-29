Assignment 1:
List1=[1,2,3,4,5,6,7,8]
List2=["a","b","c","d","e"]
Dict1={}
Dict1={List2[i]:List1[i] for i in range(len(List2))}

print(str(Dict1))
Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
