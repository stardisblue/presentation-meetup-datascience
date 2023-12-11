from pyspark.sql import DataFrame

from demo.services.reader import Reader


class CassandraReader(Reader):
    def __call__(self) -> DataFrame:
        pass
