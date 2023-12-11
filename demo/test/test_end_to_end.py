from pyspark.sql import SparkSession

from demo.adapters.cassandra_reader import CassandraReader, CassandraClient
from demo.adapters.in_memory_writer import InMemoryWriter
from demo.adapters.postgres_reader import PostgresReader, PostgresClient
from demo.get_measures_of_date_for_devices import get_measures_of_date_for_devices
from test.helpers import assertDataFrameEqual


def test_end_to_end(spark: SparkSession):
    datestamp = "2023-09-11"
    device_reader = PostgresReader(
        PostgresClient(
            spark,
            "jdbc:postgresql://localhost:5432/comwatt",
            "postgres",
            "demo_password",
        ),
        "devices",
    )
    measures_reader = CassandraReader(
        CassandraClient(spark, "comwatt.comwatt"), "measures"
    )

    device_measures = InMemoryWriter()

    assert device_reader().count() == 3
    assert measures_reader().count() == 144

    device_measures(
        get_measures_of_date_for_devices(datestamp, device_reader, measures_reader)
    )

    validation = spark.read.parquet("data/validation.parquet")

    assertDataFrameEqual(
        device_measures.dataframe, validation, order=["device_uid", "timestamp"]
    )
