#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ A function that, for each element of a given iterable sequence,
        computes its length and returns each element and its length as a tuple.
    """
    return [(i, len(i)) for i in lst]
