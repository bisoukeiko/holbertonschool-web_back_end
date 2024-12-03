#!/usr/bin/env python3
""" task08: Complex types - functions """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ takes a float as argument and returns a function that multiplies
        a float by multiplier.
    """
    def func_mul(num: float) -> float:
        """ takes a float as argument and multiplies by multiplier. """
        return num * multiplier

    return func_mul
