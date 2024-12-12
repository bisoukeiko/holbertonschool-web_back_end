#!/usr/bin/env python3
""" task12: Log stats
    provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    logs_collection = client.logs.nginx

    cnt_logs = logs_collection.count_documents({})
    print("{} logs".format(cnt_logs))

    print("Methods:")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        cnt_method = logs_collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, cnt_method))

    cnt_status = logs_collection.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(cnt_status))
