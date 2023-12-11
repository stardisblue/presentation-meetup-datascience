from pyspark.sql import DataFrame, SparkSession

from demo.services.reader import Reader


class LocalCsvReader(Reader):
    def __init__(self, spark: SparkSession, path: str) -> None:
        super().__init__()
        self._spark = spark
        self._path = path

    def __call__(self) -> DataFrame:
        return self._spark.read.csv(self._path, header=True)
