#include<stdio.h>
 
main()
{
   int n;
 
   printf("Enter a number \n");
   scanf("%d",&n);
 
   n%2 == 0 ? printf("Even number\n") : printf("Odd number\n");
 
   return 0;
}