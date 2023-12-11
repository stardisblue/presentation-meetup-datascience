import pytest

from pyspark.sql import SparkSession


@pytest.fixture(scope="session")
def spark():
    spark = (
        SparkSession.builder.master("local[2]")
        .appName("demo")
        .config(
            map={
                "spark.driver.memory": "2G",
                "spark.jars.packages": "com.datastax.spark:spark-cassandra-connector_2.12:3.4.1,org.postgresql:postgresql:42.6.0",
                "spark.sql.extensions": "com.datastax.spark.connector.CassandraSparkExtensions",
                "spark.sql.catalog.comwatt": "com.datastax.spark.connector.datasource.CassandraCatalog",
                "spark.sql.catalog.comwatt.spark.cassandra.connection.compression": "LZ4",
                "spark.sql.catalog.comwatt.spark.cassandra.connection.host": "localhost:9042",
            }
        )
        .getOrCreate()
    )
    yield spark

    spark.stop()
