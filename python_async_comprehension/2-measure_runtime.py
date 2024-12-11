#!/usr/bin/env python3
""" task02: Run time for four parallel comprehensions """
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ Execute async_comprehension four times in parallel using asyncio.gather
        and it should measure the total runtime and return it.
    """
    t_start = time.time()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension(),
                         async_comprehension())
    t_end = time.time()
    total_time = t_end - t_start
    return total_time