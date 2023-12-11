from pyspark.sql import DataFrame

from demo.services.writer import Writer


class InMemoryWriter(Writer):
    def __init__(self) -> None:
        super().__init__()
        self._dataframe = None

    @property
    def dataframe(self):
        assert self._dataframe is not None
        return self._dataframe

    def __call__(self, df: DataFrame) -> None:
        self._dataframe = df
