def main():
    cassandra_measures = CassandraReader(spark, "comwatt.measures")


if __name__ == "main":
    main()
