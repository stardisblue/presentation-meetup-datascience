from operator import methodcaller
import pytest

from pyspark.sql import SparkSession, DataFrame

from demo.adapters.local_csv_reader import LocalCsvReader
from demo.adapters.in_memory_writer import InMemoryWriter
from demo.get_measures_of_date_for_devices import get_measures_of_date_for_devices


@pytest.fixture(scope="session")
def spark():
    spark = SparkSession.builder.getOrCreate()
    yield spark

    spark.stop()


def serialize_dataframe(df: DataFrame):
    return list(map(methodcaller("asDict", recursive=True), df.collect()))


def assertDataFrameEqual(actual: DataFrame, expected: DataFrame):
    assert serialize_dataframe(actual) == serialize_dataframe(expected)


def test_get_measures_of_date(spark):
    datestamp = "2023-09-11"
    devices = LocalCsvReader(spark, "data/devices.csv")
    measures = LocalCsvReader(spark, "data/measures.csv")

    device_measures = InMemoryWriter()

    assert devices().count() == 3
    assert measures().count() == 144

    device_measures(get_measures_of_date_for_devices(datestamp, devices, measures))

    validation = spark.read.csv("data/validation.csv", header=True)
    device_measures.dataframe.explain()
    assertDataFrameEqual(device_measures.dataframe, validation)
