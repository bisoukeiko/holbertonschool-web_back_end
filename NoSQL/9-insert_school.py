#!/usr/bin/env python3
""" task09: Insert a document in Python """


def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs
        Returns the new _id
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
