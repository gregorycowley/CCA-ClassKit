# IxD Tangible Player

- Puck

- Image

- Video

- HTML

## Tangible Engine API

Client applications connect to the Tangible Engine service through a TCP socket and must send messages across the connection to receive tangible information. Below is an overview of the messages that the service expects to receive and the responses client applications can expect back. Client and service messages are serialized to JSON strings.

### Client Messages:

Patterns: This message requests the list of tangible patterns defined in the current Tangible Engine profile. In most cases this should only be sent once to create a list that can be used to reference incoming tangible matches.

Update: This message is sent along with all current touch points and is generally sent every frame and informs the service to process the touch points and search for tangible matches.

Reset: This message will reset the Tangible Engine instance, clearing all current matches.

Error: This message is exclusively for debug purposes. It tells the service to log an error to its output log.

### Service Messages:

Patterns: This message contains a list of patterns defined by the active Tangible Engine profile.

Update: This message contains a list of any recognized tangibles present on the table.

## Profile Properties

The profile properties allow you to configure settings across the entire profile, which affects the recognition of every tangible.

- Name: Profile name

- Recovery Timeout: The number of milliseconds the engine will store a lost tangible while it attempts to recover it. (0 - 1000, default is 200)

- Recovery Distance: The number of pixels (in all directions) that the engine will look for lost tangibles or lost points from the centeroid. (0.0 to 1000.0, default is 50.0)

- Smoothing: The number of frames the engine averages over when updating a tangible's position and/or rotation. (1 - 25, default is 1)

- Conflict Delay: This is a special field when there are 3-point tangibles whose patterns are a subset of other 4-point tangibles. Creates a delay in milliseconds before recognizing a 3-point tangible to allow for a 4th point to come down. (0 - 1000, suggested value is 200 for 4-point tangibles)

- Sensitivity: Amount of error allowed for a set of points to be recognized as a pattern. Is multiplied by the tangible's RMS and compared to the smallest averaged margin of error between possible matches. The larger the sensitivity, the more room for error, but the greater chance a tangible pattern is recognized. (1.0 - 100.0, default is 1.0)

## Puck

Tangible Engine puck format

** Tangible  Properties **

- ID: Unique ID of a tangible

- Name: Name of a tangible

- X Offset: Distance from the centroid of the points/feet to the center of the physical tangible on x axis. (Pixels)

- Y Offset: Distance from the centroid of the points/feet to the center of the physical tangible on y axis. (Pixels)

- Radius: Radius of the physical tangible. Calculated based on the position of the feet. (Pixels)

- Status: Whether or not the tangible is currently recognized on the screen.

- X Position: Position of the tangible centroid on the x axis, relative to the entire touch table. (Pixels)

- Y Position: Position of the tangible centroid on the y axis, relative to the entire touch table. (Pixels)

- Rotation: Current rotation of the tangible, relative to it's start rotation. (Degrees)

- RMS (Root Mean Square): Error differential between a recognized tangible and the pattern it corresponds to. Must be smaller than the Profile Property, Sensitivity in order to be recognized.