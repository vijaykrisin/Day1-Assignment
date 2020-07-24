Solution to Assignment 1:

list2=[0,1,2,10,4,1,0,56,2,0,1,3,0,56,0,4]
list3=[]
list2.sort()
for each in list2:
    if each != 0:
        list3.append(each)
for each in list2:
    if each == 0:
        list3.append(each)
print(list3)
[1, 1, 1, 2, 2, 3, 4, 4, 10, 56, 56, 0, 0, 0, 0, 0]

Soution to Assignment 2:
list1=[10,20,40,60,70,80]
list2=[5,15,25,35,45,60]
for each in list1:
    list2.append(each)
print(list2)
[5, 15, 25, 35, 45, 60, 10, 20, 40, 60, 70, 80]
