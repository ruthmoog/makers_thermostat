# Thermostat

## Specification

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## User Stories

```
As a house dweller,
So that my house is not too hot or cold,
I would like my Thermostat to start at 20 degrees C
```

```
As a house dweller,
So that I can make my house warmer
I would like to increase the temperature
```

```
As a house dweller,
So that I can make my house cooler
I would like to decrease the temperature
```

```
As a house dweller,
So that I can make sure my house never gets too cold
I would like a minimum temperature limit of 10 degrees C
```

```
As an energy concious house dweller
So that I can save energy
I expect to have a power saving mode with a mx temperature of 25 degrees
```

```
As a house dweller
So that I can feel like i'm in the desert during winter
I expect to have a max temperature of 32 degrees when power saver is off
```

```
As an energy concious house dweller
So that I can save energy
I expect to have a power saving mode swtiched on, by default
```

```
As a house dweller
So that I can reset the temperature to the default status
I want a reset button
```

```
As an energy concious house dweller
So that I am aware of my energy usage
I want my current energy usage to be indicated by a range
```