//For the all pair shortest path
function all_pair()
{

  var MAX_VALUE=1000000007;
  var v=document.getElementById("vertex").value;
  var edg=document.getElementById("edge").value;
  if(v<100 && v>0)
  {
//Creating 2D array
  var mat = new Array(v);
  for (var i = 0; i < v; i++) {
      mat[i] = new Array(v);
  }
  //assigning 0 values to all
  for(var i=0;i<v;i++)
  {
    for(var j=0;j<v;j++)
    {
      if(i!=j)
      mat[i][j]=MAX_VALUE;
      else {
        mat[i][j]=0;
      }
    }
  }
  var numbers = edg.match(/\d+/g).map(Number);
  var len=numbers.length;
  if(len%3==0)
  {
    for(var i=0;i<len;i+=3)
    {
      if((numbers[i])<=v || (numbers[i+1])<=v)
      {
      mat[numbers[i]-1][numbers[i+1]-1]=numbers[i+2];
    }
    else {
      alert("I think either you don't get the order(S,D,E) or You have entered the wrong vertex");
    }
    }

        console.log(mat);
        var diff = new Array(v);
        for (var i = 0; i < v; i++) {
            diff[i] = new Array(v);
        }
        for(var i=0;i<v;i++)
        {
          for(var j=0;j<v;j++)
          {
            if(i==j)
            {
              diff[i][j]=0;
            }
            else {
              diff[i][j]=mat[i][j];
            }
          }
        }

        for (var k = 0; k < v; k++)
        {
            for (var i = 0; i < v; i++)
            {
                for (var j = 0; j < v; j++)
                {
                    if (diff[i][k] + diff[k][j] < diff[i][j])
                        diff[i][j] = diff[i][k] + diff[k][j];
                }
            }
        }

//all_pair div display the diff matrix and mat matrix
// var show=document.getElementById("all_pair");
// for (i=0; i <v; i++) {
//   document.write("[");
//    for (j = 0; j <v; j++)
//    {
//       document.write(diff[i][j]);
//       document.write(",");
//     }
//     document.write("]");
// }

            //Time Complexity of O(v^3)

            var card=document.getElementById("allout");
            var anothercard=document.getElementById("pairout");
            var data="Time Complexity is O(V^3) where V is the Number of Vertices<br>"
          var matrixdis="[";
          for(var i=0;i<v;i++)
          {
            matrixdis+="[";
            for(var j=0;j<v;j++)
            {
              if(j!=v-1)
              {
                var x;
                if(diff[i][j]==1000000007)
                {
                  x="INF";
                }
                else {
                  x=diff[i][j];
                }
              matrixdis+=x;
              matrixdis+=",";
            }
            else {
              var x;
              if(diff[i][j]==1000000007)
              {
                x="INF";
              }
              else {
                x=diff[i][j];
              }
              matrixdis+=x;
            }
            }
            if(i!=v-1)
            {
            matrixdis+="],";
            matrixdis+="<br>";
          }
          else {
            matrixdis+="]";
          }
          }
            matrixdis+="]";



            card.innerHTML=data;
            anothercard.innerHTML=matrixdis;
  }
  else {
    alert("You have either missed a edge or the vertes PLease check the field with edges");
  }
  console.log(len);

}
    else {
      if(v>100)
      {
        alert("Last Time kise na isse majak kiya tha mein na PC reboot kar diya tha(Hint:Check Number of Vertex)");
      }
      if(v<=0)
      {
        alert("Seriously Ab tum issa karoge(Check inputs)");
      }
    }
}


// for the assembly line minimum time to form product
function assembly_line()
{
  var lne=document.getElementById("lines").value;
  var inital=document.getElementById("number").value;
  var fnal=document.getElementById("maximum").value;
  var lne1=document.getElementById("line1").value;
  var lne2=document.getElementById("line2").value;
  var crs1=document.getElementById("cross1").value;
  var crs2=document.getElementById("cross2").value;
  var lines=lne.match(/\d+/g).map(Number);
  var line=lines[0];
  var initial=inital.match(/\d+/g).map(Number);
  var inilen=initial.length;
  var final=fnal.match(/\d+/g).map(Number);
  var finlen=final.length;
  var line1=lne1.match(/\d+/g).map(Number);
  var line1len=line1.length;
  var line2=lne2.match(/\d+/g).map(Number);
  var line2len=line2.length;
  var cross1=crs1.match(/\d+/g).map(Number);
  var cross1len=cross1.length;
  var cross2=crs2.match(/\d+/g).map(Number);
  var cross2len=cross2.length;
 if(inilen!=2||finlen!=2||line1len!=line||line2len!=line||cross1len!=line||cross2len!=line)
 {
   alert("Check the inputs (Hint:Number of entry Does not match with the required data)");
 }
 else {
   var i;
   var T1=new Array(line);
   var T2=new Array(line);

    T1[0] = initial[0] + line1[0];

    T2[0] = initial[1] + line2[0];


    for (i = 1; i < line; ++i)
    {

      var withoutline1=T1[i - 1] + line1[i];
      var withline1=T2[i - 1] + cross2[i] + line1[i];
      var withoutline2=T2[i - 1] + line2[i];
      var withline2=T1[i - 1] + cross1[i] + line2[i];
     if(withoutline1<withline1)
     {
       T1[i]=withoutline1;
     }
     else {
       T1[i]=withline1;
     }
     if(withoutline2<withline2)
     {
       T2[i]=withoutline2;
     }
     else {
       T2[i]=withline2;
     }

    }
    var ans;

    if(T1[line - 1] + final[0]<T2[line - 1] + final[1])
    {
      ans=T1[line - 1] + final[0];
    }
    else {
      ans=T2[line - 1] + final[1];
    }

               console.log(ans);
               //Time Complexity of O(N) N=Number of Lines
               //Space Complexity O(N)
               var card=document.getElementById("lineout");

               var data="OUTPUT: "+ans+"<br>Time Complexity is O(N) where N the length of line"
               card.innerHTML=data;
 }

}


//Minimize the number of operations of matrix mutplication
function matrix()
{
  var num=document.getElementById("numbers").value;
  var arr=document.getElementById("array").value;
  var lines=num.match(/\d+/g).map(Number);
  var n=lines[0];
  var array=arr.match(/\d+/g).map(Number);
  var arrlen=array.length;
  if(arrlen!=n)
  {
    alert("Check the Input(Hint:Number of elements don't match with the array length)")
  }
  else {
    var m = new Array(n);
    for (var i = 0; i < n; i++) {
        m[i] = new Array(n);
    }
    var i, j, k, L, q;


    for (i = 1; i < n; i++)
        m[i][i] = 0;

    for (L = 2; L < n; L++)
    {
        for (i = 1; i < n - L + 1; i++)
        {
            j = i + L - 1;
            m[i][j] = 1000000007;
            for (k = i; k <= j - 1; k++)
            {
                q = m[i][k] + m[k + 1][j] +
                    array[i - 1] * array[k] * array[j];
                if (q < m[i][j])
                    m[i][j] = q;
            }
        }
    }

    var ans=m[1][n-1];
    console.log(ans);
  //Time Complexity O(n^3)
  //space Complexity O(n^2)
  var card=document.getElementById("matout");

  var data="OUTPUT: "+ans+"<br>Time Complexity is O(N^3) where N the length of array"
  card.innerHTML=data;
  }
}


//Find the comman sequence between two string
function longest(){
  var length1=document.getElementById("len1").value;
  var len=length1.match(/\d+/g).map(Number);
  var m=len[0];
  var length2=document.getElementById("len2").value;
  var length=length2.match(/\d+/g).map(Number);
  var n=length[0];
  var str1=document.getElementById("string1").value;
  var str2=document.getElementById("string2").value;


      var L=new Array(m+1);
      for(var i=0;i<m+1;i++)
      {
        L[i]=new Array(n+1);
      }
      var i, j;
      for (i = 0; i <= m; i++)
      {
          for (j = 0; j <= n; j++)
          {
          if (i == 0 || j == 0)
              L[i][j] = 0;

          else if (str1[i - 1] == str2[j - 1])
              L[i][j] = L[i - 1][j - 1] + 1;

          else
          {

             if(L[i-1][j]>L[i][j-1])
             {
               L[i][j]=L[i-1][j];
             }
             else {
               L[i][j]=L[i][j-1];
             }
          }
          }
      }
    var ans=L[m][n];

    //Time complexity O(n*m)
   console.log(ans);

   var card=document.getElementById("longout");

   var data="OUTPUT: "+ans+"<br>Time Complexity is O(N*M) where N is length of 1st String and M for the Lnegth of 2nd String"
   card.innerHTML=data;


}

//Selecting elemnt form a bag(0-1 knapsack)
function knapsack()
{
  var num=document.getElementById("numb").value;
  var nums=num.match(/\d+/g).map(Number);
  var number=nums[0];
  var fnd=document.getElementById("maximums").value;
  var fnds=fnd.match(/\d+/g).map(Number);
  var find=fnds[0];
  var quat=document.getElementById("quantity").value;
  var wei=document.getElementById("weight").value;
  var quantity = quat.match(/\d+/g).map(Number);
  var weight = wei.match(/\d+/g).map(Number);
  var qualen=quantity.length;
  var weilen=weight.length;
if(qualen!=number||weilen!=number||number==0||maximum==0)
{
  alert("Aap kuch bhul rahe hai kripya sare Dabbo ko dhyaan se bhare");
}


//W=find,weight=val[],wt[]=quantity[],n=number
console.log(number);
console.log(find);
   var K=new Array(number+1);
   for(var i=0;i<number+1;i++)
   {
     K[i]=new Array(find+1);
   }
   for(var i=0;i<=number;i++)
   {
     for(var w=0;w<=find;w++)
     {
       if(i==0||w==0)
       {
         K[i][w]=0;
       }
       else
       if(quantity[i-1]<=w)
       {
         var x=weight[i-1]+K[i-1][w-quantity[i-1]];
         var y=K[i-1][w];
         if(x>y)
         {K[i][w]=x;}
         else
         {K[i][w]=y;}
       }
       else {
         K[i][w]=K[i-1][w];
       }
     }
   }
   var ans= K[number][find];
   console.log(ans);

   var card=document.getElementById("knapout");

   var data="OUTPUT: "+ans+"<br>Time Complexity is O(N*W) where N is the number of quantity and W is the Weight to find"
   card.innerHTML=data;



   //Time Complexity is O(number of qunatity*find);
}
