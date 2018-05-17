use DBI;
use strict;

#First connect to the database
my $dbh = DBI-> connect(
	"dbi:SQLite:dbname=companions.sqlite",
	undef,
	undef, 
	{ 
		RaiseError => 1, 
		AutoCommit => 0
	}
) or die "Could not connect to database, it must be the Cyberman... or maybe this: " . DBI->errstr; 
#If the program runs more than one time, this drops the companion table to avoid errors.
$dbh -> do("DROP TABLE IF EXISTS companions");

#Then we create the table
my $createTableStatement = qq(
	CREATE TABLE companions (
		id   INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name CHAR(100) NOT NULL,
		last_name  CHAR(100),
		home       CHAR(100) NOT NULL
	);
);
my $rv = $dbh->do($createTableStatement);
if ($rv<0) {print DBI->errstr;}

#Next we populate the table 
my $insertStatement = qq(
	INSERT INTO companions
		(first_name, last_name, home)
		VALUES 
		("Rose      ", "Tyler    ", "Earth           "),
		("Zoe       ", "Heriot   ", "Space Station W3"),
		("Jo        ", "Grant    ", "Earth           "),
		("Leela     ", "         ", "Unspecified     "),
		("Romana    ", "         ", "Gallifrey       "),
		("Clara     ", "Oswald   ", "Earth           "),
		("Adric     ", "         ", "Alzarius        "),
		("Susan     ", "Foreman  ", "Gallifrey       ");
);
$rv = $dbh->do($insertStatement);
if ($rv<0) {print DBI->errst;}

#Now query the data base
my $selectStatement = qq(SELECT * FROM companions;);
my $sth = $dbh->prepare($selectStatement) or die "Could not preform the query, I blame the Daleks, but reason points to: " . $dbh->errst;
$rv = $sth->execute() or die "Could not execute the query: " . $dbh->errstr;
#And behold the glorious table...
print "--------------------------------------------\n";
print "|Table of some of the Doctor's companions  |\n";
print "--------------------------------------------\n";
print "|ID: |First Name|Last Name|Home            |\n";
print "--------------------------------------------\n";
while(my @row = $sth -> fetchrow_array()) {
    print "|" . $row[0] . "   |" . $row[1] . "|" . $row[2] . "|" . $row[3] . "|\n";
	print "--------------------------------------------\n";


}

#Finally disconnect from the database
$dbh->disconnect();