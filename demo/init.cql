-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS comwatt WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Create a table
create table received_measure
(
    site_id           bigint,
    time_bucket       text,
    connected_object_uid       uuid,
    timestamp timestamp,
    value             float,
    primary key ((site_id, time_bucket), connected_object_uid, timestamp)
)
    with clustering order by (connected_object_uid asc, timestamp desc);
