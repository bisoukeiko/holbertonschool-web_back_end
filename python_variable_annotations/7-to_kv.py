#!/usr/bin/env python3
from typing import Union


def to_kv(k: str, v: Union[int, float]) -> tuple:
    """
        arguments:
            k (str):
            v (int or float):

        return:
            a tuple.
            The first element of the tuple is the string k.
            The second element is the square of vand should be annotated
            as a float.
    """
    return (k, float(v ** 2))
