from demo.adapters.local_parquet_reader import LocalParquetReader
from demo.adapters.in_memory_writer import InMemoryWriter
from demo.get_measures_of_date_for_devices import get_measures_of_date_for_devices
from test.helpers import assertDataFrameEqual


def test_get_measures_of_date(spark):
    datestamp = "2023-09-11"
    devices = LocalParquetReader(spark, "data/devices.parquet")
    measures = LocalParquetReader(spark, "data/measures.parquet")

    device_measures = InMemoryWriter()

    assert devices().count() == 3
    assert measures().count() == 144

    device_measures(get_measures_of_date_for_devices(datestamp, devices, measures))

    validation = spark.read.parquet("data/validation.parquet")

    assertDataFrameEqual(
        device_measures.dataframe, validation, order=["device_uid", "timestamp"]
    )
