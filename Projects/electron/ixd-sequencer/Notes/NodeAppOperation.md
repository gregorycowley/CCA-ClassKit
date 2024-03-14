# Sequencer 
## Node App Operation
The basic operation of a Node js application 

  for sequencing

and results 

  play button 
  
  a duration 
  
  a start and end

  events in between start and end

  various points 
  
  similar models 
  
  video timeline 
  
  beginning and playhead

  markers

  video playback uses the timecode

# Parsing a List

following a list 

  begins at top

  go to next line 
  
  after every execution of action 
  
  stop when you reach the end 
  
  timing is determined by 
  
    how much time 
    
      it takes 
      
        for each execution action

executions could include 

  a duration and 
  
  there could be a constant 
  
    pause 
  
  time between executions

similar events in nature 

  a boat in a river 

    maneuvering past obstacles

    until it reaches a finish line

sliding down a rope 

  with knots in it

playing music on a score

  music includes a time signature

  and 
  
  notes convey different actions

like the Note 

outline approach 

  Play Button mean start at the beginning 
  
    pause button can mean 
    
      stop the playback 
    
      or pause the playback 
      
      stop and wait at that point 
      
      and resume when the player is pressed

the first action is executed 

  Duration:

    visually represent duration

      the length of the line

      Distance

      Size

        size: length X height
        
        distance:

          number of markers in between 
          
            like frames.

Our playback model 

  visual blocks 
  
    they're linked together 
    
    his is a good way to handle order

branching
  
    managing the events themselves
    
    event would have a type 
    
    would have parameters that can be changed

    these parameters could be a duration.

Duration could determine 

  how much time before the next event occurs

  pausing 

    to be able to 
    
    make a decision.

Timeline:

  is playhead 
  
  determines the start time for each event 
  
  laying the events 
  
  precise positions horizontally 
  
    but then precise vertically

events could have start time 

    with no end time

there would need to be 

  wait for execution or 
  
  wait for input 
  
    and go to marker

consider 

  the instruction stack 
  
  into a computer 
  
  that moves through 
  
    the stack as fast as it can. 
    
    How do you regulate the timing 
    
      or items 
      
        in the stack

Min/Max 

  a minimum time or maximum time

something to hold the computer's attention 

  to keep it from going 
  
    to the next slide. 
    
    I'm too fast
