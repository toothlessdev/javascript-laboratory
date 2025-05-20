let persistent = [];

function allocateLongLivingObjects() {
    for (let i = 0; i < 1000; i++) {
        const arr = new Array(10000).fill(i);
        persistent.push(arr); // 참조 유지
    }
}

allocateLongLivingObjects();

`
[43356:0x118008000] Shrinking page 0x39d9da5c0010: end 0x39d9da600000 -> 0x39d9da5d8000
[43356:0x118008000] Shrinking page 0x11780b400: end 0x2e91b2e40000 -> 0x2e91b2e38000
[43356:0x118008000] Shrinking page 0x11780a200: end 0x2e1d5f980000 -> 0x2e1d5f950000
[43356:0x118008000]       10 ms: Scavenge 4.1 (5.5) -> 3.7 (6.5) MB, pooled: 0 MB, 0.58 / 0.00 ms  (average mu = 1.000, current mu = 1.000) allocation failure; 


Scavenge는 Minor GC, 즉 Young Generation GC임.
매우 빠르게 실행되며, 객체들을 from-space → to-space로 복사하면서 살아있는 객체만 유지.
(4.1 → 3.7) → Young에서 사라진 객체 많음 = 일시적 객체 위주 코드로 해석 가능.




[43356:0x118008000] Memory allocator,       used:   6704 KB, available: 4236752 KB
[43356:0x118008000] Read-only space,        used:    351 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] New space,              used:    642 KB, available:    381 KB, committed:   2048 KB
[43356:0x118008000] New large object space, used:      0 KB, available:   1023 KB, committed:      0 KB
[43356:0x118008000] Old space,              used:   2285 KB, available:    489 KB, committed:   2784 KB
[43356:0x118008000] Code space,             used:     16 KB, available:    495 KB, committed:    512 KB
[43356:0x118008000] Large object space,     used:    256 KB, available:      0 KB, committed:    272 KB
[43356:0x118008000] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] Trusted space,              used:    573 KB, available:    502 KB, committed:   1088 KB
[43356:0x118008000] Trusted large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] All spaces,             used:   4125 KB, available: 4239644 KB, committed:   6704 KB
[43356:0x118008000] Pool buffering 0 chunks of committed:      0 KB
[43356:0x118008000] External memory reported:     10 KB
[43356:0x118008000] Backing store memory:   1133 KB
[43356:0x118008000] External memory global 0 KB
[43356:0x118008000] Total time spent in GC  : 0.6 ms
[43356:0x118008000]       11 ms: Scavenge 4.5 (7.0) -> 4.2 (7.1) MB, pooled: 0 MB, 1.04 / 0.00 ms  (average mu = 1.000, current mu = 1.000) allocation failure; 
[43356:0x118008000] Memory allocator,       used:   7232 KB, available: 4236224 KB
[43356:0x118008000] Read-only space,        used:    351 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] New space,              used:    381 KB, available:    642 KB, committed:   2048 KB
[43356:0x118008000] New large object space, used:      0 KB, available:   1023 KB, committed:      0 KB
[43356:0x118008000] Old space,              used:   2801 KB, available:    229 KB, committed:   3040 KB
[43356:0x118008000] Code space,             used:     16 KB, available:    495 KB, committed:    512 KB
[43356:0x118008000] Large object space,     used:    520 KB, available:      0 KB, committed:    544 KB
[43356:0x118008000] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] Trusted space,              used:    573 KB, available:    502 KB, committed:   1088 KB
[43356:0x118008000] Trusted large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] All spaces,             used:   4644 KB, available: 4239117 KB, committed:   7232 KB
[43356:0x118008000] Pool buffering 0 chunks of committed:      0 KB
[43356:0x118008000] External memory reported:     10 KB
[43356:0x118008000] Backing store memory:   1133 KB
[43356:0x118008000] External memory global 0 KB
[43356:0x118008000] Total time spent in GC  : 1.6 ms
[43356:0x118008000]       12 ms: Scavenge 5.2 (7.5) -> 5.2 (9.7) MB, pooled: 0 MB, 1.12 / 0.00 ms  (average mu = 1.000, current mu = 1.000) allocation failure; 
[43356:0x118008000] Memory allocator,       used:   9936 KB, available: 4233520 KB
[43356:0x118008000] Read-only space,        used:    351 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] New space,              used:    642 KB, available:   1405 KB, committed:   4096 KB
[43356:0x118008000] New large object space, used:      0 KB, available:   2048 KB, committed:      0 KB
[43356:0x118008000] Old space,              used:   3182 KB, available:    104 KB, committed:   3296 KB
[43356:0x118008000] Code space,             used:     16 KB, available:    495 KB, committed:    512 KB
[43356:0x118008000] Large object space,     used:    918 KB, available:      0 KB, committed:    944 KB
[43356:0x118008000] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] Trusted space,              used:    573 KB, available:    502 KB, committed:   1088 KB
[43356:0x118008000] Trusted large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] All spaces,             used:   5684 KB, available: 4238075 KB, committed:   9936 KB
[43356:0x118008000] Pool buffering 0 chunks of committed:      0 KB
[43356:0x118008000] External memory reported:     10 KB
[43356:0x118008000] Backing store memory:   1133 KB
[43356:0x118008000] External memory global 0 KB
[43356:0x118008000] Total time spent in GC  : 2.8 ms
[43356:0x118008000]       15 ms: Scavenge 8.0 (11.2) -> 7.5 (11.3) MB, pooled: 0 MB, 2.08 / 0.00 ms  (average mu = 1.000, current mu = 1.000) allocation failure; 
[43356:0x118008000] Memory allocator,       used:  11600 KB, available: 4231856 KB
[43356:0x118008000] Read-only space,        used:    351 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] New space,              used:   1433 KB, available:    614 KB, committed:   4096 KB
[43356:0x118008000] New large object space, used:      0 KB, available:   2048 KB, committed:      0 KB
[43356:0x118008000] Old space,              used:   3825 KB, available:    229 KB, committed:   4064 KB
[43356:0x118008000] Code space,             used:     17 KB, available:    494 KB, committed:    512 KB
[43356:0x118008000] Large object space,     used:   1812 KB, available:      0 KB, committed:   1840 KB
[43356:0x118008000] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] Trusted space,              used:    574 KB, available:    500 KB, committed:   1088 KB
[43356:0x118008000] Trusted large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] All spaces,             used:   8014 KB, available: 4235743 KB, committed:  11600 KB
[43356:0x118008000] Pool buffering 0 chunks of committed:      0 KB
[43356:0x118008000] External memory reported:     10 KB
[43356:0x118008000] Backing store memory:   1133 KB
[43356:0x118008000] External memory global 0 KB
[43356:0x118008000] Total time spent in GC  : 4.8 ms
[43356:0x118008000]       17 ms: Scavenge 7.7 (11.3) -> 7.7 (16.6) MB, pooled: 0 MB, 1.79 / 0.00 ms  (average mu = 1.000, current mu = 1.000) task; 
[43356:0x118008000] Memory allocator,       used:  16976 KB, available: 4226480 KB
[43356:0x118008000] Read-only space,        used:    351 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] New space,              used:    268 KB, available:   3827 KB, committed:   8192 KB
[43356:0x118008000] New large object space, used:      0 KB, available:   4096 KB, committed:      0 KB
[43356:0x118008000] Old space,              used:   5230 KB, available:    104 KB, committed:   5344 KB
[43356:0x118008000] Code space,             used:     17 KB, available:    494 KB, committed:    512 KB
[43356:0x118008000] Large object space,     used:   1812 KB, available:      0 KB, committed:   1840 KB
[43356:0x118008000] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] Trusted space,              used:    574 KB, available:    500 KB, committed:   1088 KB
[43356:0x118008000] Trusted large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[43356:0x118008000] All spaces,             used:   8254 KB, available: 4235503 KB, committed:  16976 KB
[43356:0x118008000] Pool buffering 0 chunks of committed:      0 KB
[43356:0x118008000] External memory reported:     10 KB
[43356:0x118008000] Backing store memory:   1133 KB
[43356:0x118008000] External memory global 0 KB
[43356:0x118008000] Total time spent in GC  : 6.6 ms
✨  Done in 0.48s.
`;
