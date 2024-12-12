#!/usr/bin/env python3
""" task12: Log stats """
from pymongo import MongoClient


def log_stats():
    """ provides some stats about Nginx logs stored in MongoDB """
    client = MongoClient("mongodb://127.0.0.1:27017")
    logs_collection = client.logs.nginx

    cnt_logs = logs_collection.count_documents({})
    print(f"{cnt_logs} logs")

    print("Methods:")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        cnt_method = logs_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {cnt_method}")

    cnt_status = logs_collection.count_documents({"method": "GET",
                                                  "path": "/status"})
    print(f"{cnt_status} status check")


if __name__ == "__main__":
    log_stats()
