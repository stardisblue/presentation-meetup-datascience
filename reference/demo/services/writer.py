from abc import ABC, abstractmethod

from pyspark.sql import DataFrame


class Writer(ABC):
    @abstractmethod
    def __call__(self, df: DataFrame) -> None:
        ...
