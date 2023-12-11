from pyspark.sql.functions import col

from demo.services.reader import Reader


def get_measures_of_date_for_devices(
    datestamp: str, device_reader: Reader, measures_reader: Reader
):
    df_measure = measures_reader().filter(col("timestamp").cast("date") == datestamp)

    return device_reader().join(df_measure, on=["site_id", "connected_object_uid"])
