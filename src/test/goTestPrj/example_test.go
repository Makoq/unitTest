package example

import "testing"

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
func BenchmarkFib(b *testing.B) {
	for n := 0; n < b.N; n++ {
		BenchMarkNormal() // run fib(30) b.N times
	}
}
