#!/usr/bin/env python3
""" task01: Simple pagination """
import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Use index_range to find the correct indexes to paginate
            the dataset correctly and return the appropriate page of
            the dataset. If the input arguments are out of range for
            the dataset, an empty list should be returned.
        """
        assert type(page) is int and type(page_size) is int
        assert page > 0 and page_size > 0
        dataset = self.dataset()
        paginated = index_range(page, page_size)
        end_idx = min(paginated[1], len(dataset))

        return dataset[paginated[0]:end_idx]
