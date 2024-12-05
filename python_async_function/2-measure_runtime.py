#!/usr/bin/env python3
""" task02:  Measure the runtime """
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """ measures the total execution time """
    t_start = time.time()
    asyncio.run(wait_n(n, max_delay))
    t_end = time.time()
    total_time = t_end - t_start
    return total_time / n
