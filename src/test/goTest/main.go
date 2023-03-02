package main

import "fmt"

func main() {
 	arr := []int{1,2,3,5,7}
	re:=make([]int,len(arr))
	copy(re,arr)
	arr=append(arr, -1)
	fmt.Println(arr)
	fmt.Println(re)

}

