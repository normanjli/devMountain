log_file = open(r'D:\devMountain\assessments\assessment-data\um-server-01.txt')
#opens a file in the directory and stores the data in a variable


def sales_reports(log_file): #function declaration
    for line in log_file: #for loop looping opver each line in the open file
        line = line.rstrip() #removing whitespace in each line
        day = line[0:3] #sets the first three chracters of the line equal to a new variable day
        if day == "Mon": #checkec the variable against day
            print(line)#prints the line if it evals true


# sales_reports(log_file) #calls the function

def ten_melon(log_file):
    for line in log_file:
        if float(line.split(' ')[2])>10:
            print(line)

ten_melon(log_file)
