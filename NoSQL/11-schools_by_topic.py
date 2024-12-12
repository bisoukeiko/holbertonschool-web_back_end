#!/usr/bin/env python3
""" task11: Where can I learn Python? """


def schools_by_topic(mongo_collection, topic):
    """ returns the list of school having a specific topic
        arg:
            mongo_collection: the pymongo collection object
            topic (string): topic searched
    """
    return mongo_collection.find({'topics': topic})
