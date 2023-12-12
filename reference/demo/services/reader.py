from abc import ABC, abstractmethod

from pyspark.sql import DataFrame


class Reader(ABC):
    @abstractmethod
    def __call__(self) -> DataFrame:
        ...
