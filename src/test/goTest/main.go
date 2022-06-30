package main

import (
	"fmt"
	"time"
	// "strings"
	// "encoding/json"
)

//0123456789101112131415

func BenchmarkMain() {
	start := time.Now()
	BenchMarkMultG()
	fmt.Println("-")
	t := time.Since(start)
	fmt.Println(t)

	start = time.Now()
	BenchMarkNormal()
	fmt.Println("-")
	t = time.Since(start)
	// fmt.Println(t)
}

func BenchMarkMultG() {
	src := make(chan int)
	dist := make(chan int, 3)

	go func() {
		defer close(src)
		for i := 0; i < 10; i++ {
			src <- i
		}
	}()

	go func() {
		defer close(dist)
		for v := range src {
			dist <- v * v
		}
	}()
	re := make([]int, 0)
	for v := range dist {
		re = append(re, v)
	}

}

func BenchMarkNormal() {
	re := make([]int, 0)
	for i := 0; i < 10; i++ {
		re = append(re, i*i)
	}
}
