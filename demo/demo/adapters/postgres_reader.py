from pyspark.sql import DataFrame, SparkSession

from demo.services.reader import Reader


class PostgresClient:
    def __init__(
        self, session: SparkSession, url: str, user: str, password: str
    ) -> None:
        self.session = session
        self.connection = dict(
            driver="org.postgresql.Driver",
            url=url,
            user=user,
            password=password,
        )

    def read(self, dbtable: str):
        return self.session.read.format("jdbc").load(dbtable=dbtable, **self.connection)


class PostgresReader(Reader):
    def __init__(self, client: PostgresClient, table: str):
        super().__init__()
        self.client = client
        self._table = table

    def __call__(self) -> DataFrame:
        return self.client.read(self._table)
