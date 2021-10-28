open_file = open("D:\devMountain\labs\data-python\CupcakeInvoices.csv")
# for line in open_file:
#     print(line)
# for line in open_file:
#     print(line.split(',')[2])
ans=[]
for line in open_file:
    print(round(float(line.split(',')[3])*float(line.split(',')[4]),2))
    ans.append(round(float(line.split(',')[3])*float(line.split(',')[4]),2))
print(round(sum(ans,0),2))
