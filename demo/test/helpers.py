from operator import methodcaller
from typing import Iterable

from pyspark.sql import DataFrame


def serialize_dataframe(df: DataFrame):
    return list(map(methodcaller("asDict", recursive=True), df.collect()))


def assertDataFrameEqual(
    df_actual: DataFrame, df_expected: DataFrame, order: Iterable[str]
):
    actual = serialize_dataframe(df_actual.orderBy(*order))
    expected = serialize_dataframe(df_expected.orderBy(*order))
    assert actual == expected
