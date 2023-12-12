from pyspark.sql import SparkSession

from demo.services.reader import Reader


class CassandraClient:
    def __init__(self, session: SparkSession, keyspace: str) -> None:
        assert isinstance(session, SparkSession)

        self.session = session
        self.keyspace = keyspace

    def read(self, table: str):
        return self.session.read.options(directJoinSetting="on").table(
            f"{self.keyspace}.{table}"
        )


class CassandraReader(Reader):
    def __init__(self, client: CassandraClient, table: str) -> None:
        super().__init__()
        self.client = client
        self._table = table

    def __call__(self):
        return self.client.read(self._table)
