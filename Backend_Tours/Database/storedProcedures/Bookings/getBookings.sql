USE Njenga_Tour;
GO
CREATE OR ALTER PROCEDURE getBookings
AS
BEGIN
    SELECT * FROM Bookings;
END;
GO