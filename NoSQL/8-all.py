#!/usr/bin/env python3
""" task08: List all documents in Python """

def list_all(mongo_collection):
    """ lists all documents in a collection
        Return an empty list if no document in the collection
    """
    list_all = list(mongo_collection.find())
    if list_all:
        return list_all
    else:
        return []
